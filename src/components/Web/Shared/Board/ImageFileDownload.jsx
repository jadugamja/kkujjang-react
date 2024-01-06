import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

// const example = {
//   fileName: "avatar.png",
//   filePath: "/files/"
// };

const ImageFileDownload = ({ file }) => {
  const downloadFile = async (file) => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_BASE_URL +
          file.filePath +
          encodeURIComponent(file.fileName),
        {
          responseType: "blob"
        }
      );

      const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.setAttribute("download", file.fileName);
      document.body.appendChild(link);

      link.click();
      link.remove();
    } catch (error) {
      console.error("Failed to download file:", error);
    }
  };

  return (
    <div>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          downloadFile(file);
        }}
      >
        <FileDownloadIcon icon={faPaperclip} />
      </a>
    </div>
  );
};

ImageFileDownload.propTypes = {
  file: PropTypes.object
};

const FileDownloadIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: #a7a7a7;
`;

export default ImageFileDownload;
