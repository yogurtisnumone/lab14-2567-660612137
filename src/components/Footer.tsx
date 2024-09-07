export default function Footer( props:any ) {
  return (
    <div style={{ textAlign: "center", marginTop: "15px"  }}>
      <p>Copyright © {props.year} {props.name} {props.id} </p>
    </div>
  );
}
