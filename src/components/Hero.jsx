import logo from "../images/logo.jpg";
export default function Hero() {
  return (
    <div className="container" id="hero">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-6">
          <p className="text-muted">Hai,</p>
          <h1 className="fw-bold ">Saya Muhammad Fitrian</h1>
          <p className="">NIM Saya 41215308</p>
          <p className="text-muted">
            Mahasiswa aktif Teknik Informatika dan berfokus pada bidang
            pengembangan Web Development
          </p>
        </div>
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          <img src={logo} alt="" className={"rounded-circle"} />
        </div>
      </div>
    </div>
  );
}
