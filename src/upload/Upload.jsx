import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Box,
  Flex,
  Image,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import ReactCrop, {
  centerCrop,
  convertToPixelCrop,
  makeAspectCrop,
} from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { useRef } from 'react';
import setCanvasPreview from '../setCanvasPreview';

const ASPECT_RATIO = 1;
const MIN_DIMENSION = 150;

const ImageCropperModal = ({ isOpen, onClose, src, updateFoodImage }) => {
  const imageRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [imageSrc, setImageSrc] = useState('');
  const [crop, setCrop] = useState();
  const [error, setError] = useState('');
  //   const [crop, setCrop] = useState({
  //     unit: '%',
  //     width: 30,
  //     aspect: 16 / 9,
  //   });
  //   const [croppedImageUrl, setCroppedImageUrl] = useState(null);

  //   const handleImageCrop = async (cropData) => {
  //     if (src && cropData.width && cropData.height) {
  //       const croppedImageUrl = await getCroppedImage(cropData);
  //       setCroppedImageUrl(croppedImageUrl);
  //     }
  //   };

  //   const getCroppedImage = (cropData) => {
  //     return new Promise((resolve, reject) => {
  //       const image = new Image();
  //       image.src = src;
  //       image.onload = () => {
  //         const canvas = document.createElement('canvas');
  //         canvas.width = cropData.width;
  //         canvas.height = cropData.height;
  //         const ctx = canvas.getContext('2d');

  //         ctx.drawImage(
  //           image,
  //           cropData.x,
  //           cropData.y,
  //           cropData.width,
  //           cropData.height,
  //           0,
  //           0,
  //           cropData.width,
  //           cropData.height
  //         );

  //         canvas.toBlob((blob) => {
  //           resolve(URL.createObjectURL(blob));
  //         }, 'image/jpeg');
  //       };
  //     });
  //   };

  const onSelectFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const imageElement = new window.Image();
      const imageUrl = reader.result?.toString() || '';
      imageElement.src = imageUrl;

      imageElement.addEventListener('load', (e) => {
        if (error) setError('');
        const { naturalWidth, naturalHeight } = e.currentTarget;
        if (naturalWidth < MIN_DIMENSION || naturalHeight < MIN_DIMENSION) {
          setError('Image must be at least 150 x 150 pixels.');
          return setImageSrc('');
        }
      });

      setImageSrc(imageUrl);
    });
    reader.readAsDataURL(file);
  };

  const onImageLoad = (e) => {
    const { width, height } = e.currentTarget;
    const croppedMinWidth = (MIN_DIMENSION / width) * 100;

    const crop = makeAspectCrop(
      {
        unit: 'croppedMinWidth',
        width: 25,
      },
      ASPECT_RATIO,
      width,
      height
    );
    const centeredCrop = centerCrop(crop, width, height);
    setCrop(centeredCrop);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent h="170vh">
        <ModalHeader>Crop Image</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={onSelectFile}
          />
          {/* Button to trigger image selection */}
          <Button
            onClick={() => document.querySelector('input[type="file"]').click()}
          >
            Select Image
          </Button>
          {error && <Text color="red">{error}</Text>}
          {imageSrc && (
            <VStack alignItems="center">
              <ReactCrop
                onChange={(pixelCrop, percentCrop) => setCrop(percentCrop)}
                crop={crop}
                circularCrop
                keepSelection
                aspect={ASPECT_RATIO}
                minWidth={MIN_DIMENSION}
              >
                <Image
                  ref={imageRef}
                  src={imageSrc}
                  alt="Upload"
                  style={{ maxHeight: '70vh' }}
                  onLoad={onImageLoad}
                />
              </ReactCrop>
              <Button
                onClick={() => {
                  setCanvasPreview(
                    imageRef.current,
                    previewCanvasRef.current,
                    convertToPixelCrop(
                      crop,
                      imageRef.current.width,
                      imageRef.current.height
                    )
                  );
                  const dataUrl = previewCanvasRef.current.toDataUrl();
                }}
                color="blueviolet"
              >
                Crop Image
              </Button>
            </VStack>
          )}
          {crop && (
            <canvas
              ref={previewCanvasRef}
              style={{
                display: 'none',
                paddingTop: '10',
                border: '1px solid black',
                objectFit: 'contain',
                width: '300px',
                height: '300px',
              }}
            />
          )}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ImageCropperModal;
