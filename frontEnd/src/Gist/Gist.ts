import axios from "axios";

export const createGist = async (
  fileName: string,
  fileContent: any,
  accessToken: string
) => {
  const headers = {
    Authorization: `token ${accessToken}`,
  };
  const gistData = {
    description: "Project gist",
    public: true,
    files: {
      [fileName]: {
        content: fileContent,
      },
    },
  };

  try {
    const response = await axios.post(
      "https://api.github.com/gists",
      gistData,
      { headers }
    );
    console.log("Gist created successfully:", response.data.html_url);
    return response.data.html_url; // Return the URL of the created gist
  } catch (error) {
    console.error("Error creating gist:");
    throw new Error("Failed to create gist");
  }
};

// Example usage
