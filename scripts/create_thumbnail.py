import os
from PIL import Image

def resize_images(source_dir, max_size=(500, 500)):
    """
    Resizes all JPEG images in the source directory to a maximum size of 500x500.
    Saves the resized images with "_small" appended to the original filename.

    Args:
        source_dir (str): Path to the directory containing the images.
        max_size (tuple): Maximum width and height for the resized images.
    """
    if not os.path.exists(source_dir):
        print("Source directory does not exist.")
        return

    for root, _, files in os.walk(source_dir):
        for file in files:
            if file.lower().endswith(".jpg"):
                try:
                    img_path = os.path.join(root, file)
                    img = Image.open(img_path)
                    img.thumbnail(max_size, Image.ANTIALIAS)

                    file_name, file_ext = os.path.splitext(file)
                    output_path = os.path.join(root, f"{file_name}_small{file_ext}")

                    img.save(output_path, "JPEG")
                    print(f"Resized: {img_path} -> {output_path}")
                except Exception as e:
                    print(f"Error processing {file}: {e}")

if __name__ == "__main__":
    # Specify source directory
    source_directory = input("Enter the path to the source directory: ").strip()

    resize_images(source_directory)
    print("Resizing completed.")
