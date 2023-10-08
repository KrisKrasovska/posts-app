interface Props {
  params: { id: number };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const { postId } = params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  return (
    <>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </>
  );
}
