export async function search(){
    const results = await fetch(
        `${process.env.CLOUDINARY_URL}/resources/image`,
        // `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`,
        {
          headers: {
            Authorization: `Basic ${Buffer.from(
              process.env.CLOUDINARY_API_KEY +
                ":" +
                process.env.CLOUDINARY_API_SECRET
            ).toString("base64")}`,
          },
        }
      ).then((res) => res.json());
    return results
}

