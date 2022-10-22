export default function Title(props) {
  return (
    <div className="title text-center" id="title">
      <p className="">{props.title}</p>
      <p className="text-muted">{props.content}</p>
    </div>
  );
}
