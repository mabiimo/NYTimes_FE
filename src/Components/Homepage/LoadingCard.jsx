export default function LoadingCard() {
  return (
    <div className="flex flex-wrap justify-end gap-5 mt-5">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="mt-1 w-96">
          <div>
            <div variant="h5" color="blue-gray" className="w-36 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
            <div className="text-[12px] w-36 h-3 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
            <div className="text-[12px] w-36 h-3 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
            <div className="text-[12px] w-50 h-10 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
