import { notFound } from 'next/navigation';

import { getAuction } from '@/lib/services/auction-service';

interface PageProps {
  params: {
    auctionId: string;
  };
}

export default async function EditAuctionPage({ params }: PageProps) {
  const auction = await getAuction(params.auctionId);

  if (!auction || !auction.userIsOwner) {
    notFound();
  }

  return <div>Edit page {auction.id}</div>;
}
