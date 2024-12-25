import os
from PIL import Image

def convert_images_to_jpg(source_dir, output_dir):
    """
    Converts all images in the source directory to JPEG format and saves them sequentially
    numbered in the output directory.

    Args:
        source_dir (str): Path to the directory containing the images.
        output_dir (str): Path to the directory to save converted images.
    """
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # Supported image formats by Pillow
    supported_formats = (".png", ".jpeg", ".jpg", ".bmp", ".gif", ".tiff", ".webp")

    image_counter = 1

    for root, _, files in os.walk(source_dir):
        for file in files:
            if file.lower().endswith(supported_formats):
                try:
                    img_path = os.path.join(root, file)
                    img = Image.open(img_path)
                    img = img.convert("RGB")  # Convert to RGB for JPEG compatibility

                    output_path = os.path.join(output_dir, f"{image_counter}.jpg")
                    img.save(output_path, "JPEG")

                    print(f"Converted: {img_path} -> {output_path}")
                    image_counter += 1
                except Exception as e:
                    print(f"Error processing {file}: {e}")

if __name__ == "__main__":
    # Specify source and output directories
    source_directory = input("Enter the path to the source directory: ").strip()
    output_directory = input("Enter the path to the output directory: ").strip()

    convert_images_to_jpg(source_directory, output_directory)
    print("Conversion completed.")
