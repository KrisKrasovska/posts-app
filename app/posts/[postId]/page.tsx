import styles from "./../page.module.scss";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { postId: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.postId;

  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  }).then((res) => res.json());

  return {
    title: post.title,
  };
}

export default async function Post({ params }: Props) {
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
      <h2 className={styles.title}>{data.title}</h2>
      <p>{data.body}</p>
    </>
  );
}
