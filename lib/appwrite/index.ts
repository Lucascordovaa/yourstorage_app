"use server";

import {
  Account,
  Avatars,
  Client,
  Databases,
  Storage,
  Users,
} from "node-appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";
import { cookies } from "next/headers";

// Create session client
export const createSessionClient = async () => {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId);

  const session = (await cookies()).get("appwrite-session");

  if (!session || !session.value) throw new Error("No session");

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
    get databases() {
      return new Databases(client);
    },
  };
};

// Create admin client (for deletion function and management)
export const createAdminClient = async () => {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId)
    .setKey(appwriteConfig.secretKey);

  return {
    get account() {
      return new Account(client);
    },
    get databases() {
      return new Databases(client);
    },
    get storage() {
      return new Storage(client);
    },
    get avatars() {
      return new Avatars(client);
    },
    get users() {
      return new Users(client); // Added Users API here
    },
  };
};

// Data deletion function
export const deleteExpiredData = async () => {
  const { databases, storage, users } = await createAdminClient();

  // Fetch all users
  const usersCollectionId = appwriteConfig.usersCollectionId;
  const bucketId = appwriteConfig.bucket;

  const now = new Date().getTime();

  try {
    // Fetch all users
    const usersList = await databases.listDocuments(
      appwriteConfig.databaseId,
      usersCollectionId,
    );

    for (const user of usersList.documents) {
      const userCreated = new Date(user.$createdAt).getTime();

      if (now - userCreated > 180000) {
        // Older than 1 hour
        // Delete user
        await users.delete(user.$id); // Use the correct API to delete the user

        // Fetch and delete files associated with the user
        const userFiles = await storage.listFiles(bucketId, [
          `equal("userId", "${user.$id}")`,
        ]);

        for (const file of userFiles.files) {
          await storage.deleteFile(bucketId, file.$id);
        }

        console.log(`Deleted user ${user.$id} and their files`);
      }
    }
  } catch (error) {
    console.error("Error deleting expired data:", error);
  }
};
