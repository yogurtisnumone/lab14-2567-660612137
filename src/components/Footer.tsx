import { FooterProps } from "@lib/types";

export default function Footer({name, studentId}: FooterProps) {
  return (
    <div>
      <p>Copyright © 2024 {name} {studentId} </p>
    </div>
  );
}
