import Image from "next/image";

export default function Loading() {
  return (
    <div className="loader">
      <Image src={"/logo.svg"} width={80} height={80} alt="Taste Trail" />
      <p className="loader__text">Loading...</p>
    </div>
  );
}
