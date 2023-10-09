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
  const resComments = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
    {
      cache: "no-store",
    }
  );
  const dataComments = await resComments.json();

  return (
    <>
      <h2 className={styles.title}>{data.title}</h2>
      <p className={styles.textPost}>{data.body}</p>
      <p className={styles.textComment}>Comments</p>
      <ul>
        {dataComments.map(
          ({ body, email }: { body: string; email: string }) => (
            <li className={styles.item} key={email}>
              <p className={styles.email}>{email}</p>
              <p className={styles.text}>{body}</p>
            </li>
          )
        )}
      </ul>
    </>
  );
}
