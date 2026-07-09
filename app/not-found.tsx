import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-gold">404</p>
      <h1 className="mt-4 font-display text-3xl font-semibold text-offwhite sm:text-4xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-500">
        The page you&apos;re looking for may have moved. Try heading back to
        the homepage.
      </p>
      <div className="mt-8">
        <Button href="/" variant="primary">
          Back to homepage
        </Button>
      </div>
    </section>
  );
}
