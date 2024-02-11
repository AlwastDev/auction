import { notFound } from 'next/navigation';

import { getAuction } from '@/lib/services/auction-service';
import { EditContainer } from './_components/edit-container/edit-container';

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

  return <EditContainer auction={auction} />;
}
