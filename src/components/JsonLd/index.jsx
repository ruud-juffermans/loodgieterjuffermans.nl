/**
 * Renders structured data inline. Works on the server (prerendered HTML)
 * and on the client. Search engines read JSON-LD anywhere in the document.
 */
export default function JsonLd({ data }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  );
}
