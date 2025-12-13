interface UploadPostValues {
    userId: string,
    text: string,
    files: MediaFile[],
}

export interface MediaFile {
  id: string;
  file: File;
  previewUrl: string;
  type: 'image' | 'video' | 'audio';
  name: string;
  size: number;
  duration: number | undefined;
}