type PartsRendererProps = {
  parts: Array<string>;
};

export function PartsRenderer({ parts }: PartsRendererProps) {
  return (
    <ul className="list-disc pl-4">
      {parts.map((e) => (
        <li>{e}</li>
      ))}
    </ul>
  );
}
