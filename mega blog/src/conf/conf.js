// storing env keys for the main files with the system so that it dosent break the production
// sometimes what happens is the process or env keys take time to load the keys in the system during the relaod so, in order to avoid it we are creating a conf file , key value export 
const conf ={
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}



export default conf 