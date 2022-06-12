import "./preloader.scss";
const PreLoader = () => {
  return (
    <div id="preloder">
      <img src="./img/logo.svg" alt="logo" height={`150px`}  style={{
        position: 'absolute',
        left: '0',
        right: '0',
        top: '0px',
        bottom: '200px',
        margin: 'auto auto',
      }}/>
      <div className="loader"></div>
    </div>
  );
};

export default PreLoader;
