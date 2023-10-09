import ButtonBack from "@/components/ButtonBack/ButtonBack";
import styles from "./../page.module.scss";
import type { Metadata, ResolvingMetadata } from "next";
import axios from "axios";

type Props = {
  params: { postId: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.postId;
  const postResponse = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );

  const post = postResponse.data;

  return {
    title: post.title,
  };
}

export default async function Post({ params }: Props) {
  const { postId } = params;

  const [commentsResponse, postResponse] = await Promise.all([
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
      headers: {
        "Cache-Control": "no-store",
      },
    }),
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      headers: {
        "Cache-Control": "no-store",
      },
    }),
  ]);

  const commentsData = commentsResponse.data;
  const postData = postResponse.data;

  const resUser = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${postData.userId}`,
    {
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
  const dataUser = resUser.data;

  return (
    <>
      <ButtonBack />
      <h2 className={styles.title}>{postData.title}</h2>
      <p className={styles.textComment}>UserName : {dataUser.username}</p>
      <p className={styles.textPost}>{postData.body}</p>
      <p className={styles.textComment}>Comments</p>
      <ul>
        {commentsData.map(
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
