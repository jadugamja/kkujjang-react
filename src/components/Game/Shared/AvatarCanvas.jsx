import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import accFx1 from "@/assets/images/acc_angel-ring.svg";
import accFx2 from "@/assets/images/acc_shining.svg";
import accHead1 from "@/assets/images/acc_cowboy-hat.svg";
import accEmo1 from "@/assets/images/acc_frustration.svg";
import accEmo2 from "@/assets/images/acc_water-drop.svg";
import accEye1 from "@/assets/images/acc_heart-sunglasses.svg";
import accEye2 from "@/assets/images/acc_sunglasses.svg";
import accEye3 from "@/assets/images/acc_bandage.svg";
import accHead2 from "@/assets/images/acc_tomato-top.svg";

const getAccessoryImg = (item) => {
  switch (item) {
    case "emo1":
      return accEmo1;
    case "emo2":
      return accEmo2;
    case "eye1":
      return accEye1;
    case "eye2":
      return accEye2;
    case "eye3":
      return accEye3;
    case "head1":
      return accHead1;
    case "head2":
      return accHead2;
    case "fx1":
      return accFx1;
    case "fx2":
      return accFx2;
    default:
      return null;
  }
};

const getPosition = (item, width, height) => {
  switch (item) {
    case "emo1":
      return { top: 0, left: width * 0.6 };
    case "emo2":
      return { top: 0, left: 0 };
    case "eye1":
      return { top: height * 0.14, left: width * 0.06 };
    case "eye2":
      return { top: height * 0.35, left: width * 0.13 };
    case "eye3":
      return { top: height * 0.08, left: width * 0.1 };
    case "head1":
      return { top: -10, left: -10 };
    case "head2":
      return { top: -2, left: 50 };
    case "fx1":
      return { top: -40, left: 5 };
    case "fx2":
      return { top: 10, left: 125 };
    default:
      return { top: 0, left: 0 };
  }
};

const AvatarCanvas = ({ item, avatar, setAvatarImage }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const avatarImg = new Image();
    const accessoryImg = new Image();

    avatarImg.onload = () => {
      canvas.width = avatarImg.width / 1.5 + 20;
      canvas.height = avatarImg.height / 1.5 + 40;
      ctx.drawImage(avatarImg, 10, 20, canvas.width - 20, canvas.height - 40);

      if (getAccessoryImg(item)) {
        accessoryImg.onload = () => {
          const position = getPosition(item, canvas.width, canvas.height);
          ctx.drawImage(
            accessoryImg,
            position.left + 10,
            position.top + 20,
            accessoryImg.width,
            accessoryImg.height
          );
          setAvatarImage(canvas.toDataURL());
        };
        accessoryImg.src = getAccessoryImg(item);
      } else {
        setAvatarImage(canvas.toDataURL());
      }
    };
    avatarImg.src = avatar;
  }, [item, avatar]);

  return <canvas ref={canvasRef} />;
};

AvatarCanvas.propTypes = {
  avatar: PropTypes.string,
  item: PropTypes.string,
  setAvatarImage: PropTypes.func
};

export default AvatarCanvas;
