export default function Index(props) {
 
  console.log(props.cookies,' props cookies ');
  return <div> Home page</div>
}

export async function getServerSideProps(context) {
  const cookies = context.req.headers.cookie;
  return {
    props: {cookies},
  };
}