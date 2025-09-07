export default function PromoPage({ params, searchParams }) {
  const { slug = [] } = params || {};
  return (
    <main className="max-w-7xl mx-auto c-space py-16">
      <h1 className="head-text mb-6">Campaign</h1>
      <div className="text-white-600">
        <p>Path: /en/promo/{slug.join('/')}</p>
        {Object.keys(searchParams || {}).length > 0 && (
          <>
            <p className="mt-4 font-semibold">Query params:</p>
            <pre className="whitespace-pre-wrap break-all bg-black/30 p-3 rounded">{JSON.stringify(searchParams, null, 2)}</pre>
          </>
        )}
      </div>
    </main>
  );
}

