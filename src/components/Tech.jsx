import Card from "./Card";
import Title from "./Title";
export default function Tech() {
  return (
    <div className="container-fluid" id="tech">
      <Title
        title="Tools that I Love"
        jenis_icon="brands"
        content="beberapa tools yang saat ini saya gunakan"
      />
      <div className="row justify-content-center align-items-center">
        <Card.column
          column="col-lg-3"
          icon="github"
          title="Programming"
          jenis_icon="brands"
          content="Mempunyai passion dalam bidang Programming"
        />
        <Card.column
          column="col-lg-3"
          icon="square-js"
          title="Programming"
          jenis_icon="brands"
          content="Mempunyai passion dalam bidang Programming"
        />
        <Card.column
          column="col-lg-3"
          icon="sass"
          title="Programming"
          jenis_icon="brands"
          content="Mempunyai passion dalam bidang Programming"
        />
      </div>
    </div>
  );
}
