import Card from "./Card";
import Title from "./Title";

export default function PersonalInterest() {
  return (
    <div className="container" id="personal_interest">
      <Title title="My Personal Interest" content="lorem" />
      <div className="row justify-content-center align-items-center">
        <Card.column
          column="col-lg-4"
          icon="image"
          title="Web Design"
          jenis_icon="solid"
          content="Mempunyai passion dalam bidang web design"
        />
        <Card.column
          column="col-lg-4"
          icon="code"
          title="Programming"
          jenis_icon="solid"
          content="Mempunyai passion dalam bidang Programming"
        />
        <Card.column
          column="col-lg-4"
          icon="heart"
          title="Web Enthusiast"
          jenis_icon="solid"
          content="Mempunyai passion dalam bidang web design"
        />
      </div>
    </div>
  );
}
