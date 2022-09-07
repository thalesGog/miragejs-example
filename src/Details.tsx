export default function Details({
  details,
  loading
}: {
  details: {
    _id: string;
    content: string;
    authorSlug: string;
    tags: string[];
  };
  loading: boolean;
}) {
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      Content: {details.content}
      <br />
      Slug: {details.authorSlug}
      <br /> <br />
      Tags:
      <ul>
        {details.tags.map((detailTag) => (
          <li key={detailTag}>{detailTag}</li>
        ))}
      </ul>
    </div>
  );
}
