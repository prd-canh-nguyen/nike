import { useEffect } from "react";
import cancel from "../../assets/image/cancel.svg";

function showImg(imgs) {
  var result = null;
  if (imgs.length > 0) {
    result = imgs.map((img, index) => {
      return <img key={index} src={img} alt="" className="modal-img" />;
    });
  }
  return result;
}

function ImgModal(props) {
  var { isImgModal, img, index, position } = props;
  function handleImgModal() {
    props.handleImgModal();
  }
  useEffect(() => {
    switch (index) {
      case 1:
        window.scrollTo(0, 2529);
        break;
      case 2:
        window.scrollTo(0, 4196);
        break;
      case 3:
        window.scrollTo(0, 5751);
        break;
      case 4:
        window.scrollTo(0, 7700);
        break;
      case 5:
        window.scrollTo(0, 9417);
        break;
      case 6:
        window.scrollTo(0, 10767);
        break;
      default:
        window.scrollTo(0, 705);
        break;
    }
  }, [isImgModal]);
  useEffect(() => {
    return () => {
      window.scrollTo(0, position);
    };
  }, []);
  return (
    <div className={`container-modal-img ${isImgModal ? "show" : "show"}`}>
      <img
        src={cancel}
        className="container-modal-img-cancel"
        alt=""
        onClick={handleImgModal}
      />
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          {/* showImg */}
          {showImg(img)}
        </div>
      </div>
    </div>
  );
}

export default ImgModal;
