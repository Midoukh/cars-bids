export const getYouTubeVideoId = (url: string): string | null => {

    // Extract the video ID from different YouTube URL formats
    const regexList = [
      /(?:youtube(?:-nocookie)?\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=|.*[?&]vi=))|youtu\.be\/)([^"&?/ ]{11})/,
      /^https?:\/\/(www\.)?youtu\.be\/([^\/\s]*)$/,
    ];
  
    for (const regex of regexList) {
      const match = url.match(regex);
      if (match && match[1]) {
        return match[1];
      }
    }
  
    return null; // Return null if the video ID couldn't be found
  }