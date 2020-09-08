import React from "react"

export default function TableHeader({ data }: { data: string[] }) {
  return (
    <>
      {data.map((heading: string, index: number) => (
        <th key={index}>{heading}</th>
      ))}
    </>
  );
}
