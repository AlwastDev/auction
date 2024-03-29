import { notFound } from 'next/navigation';

import { getAuction } from '@/lib/services/auction-service';
import { BetContainer } from './_components/bet-container/bet-container';

interface PageProps {
  params: {
    auctionId: string;
  };
}

export default async function BetAuctionPage({ params }: PageProps) {
  const auction = await getAuction(params.auctionId);

  if (!auction || auction.userIsOwner) {
    notFound();
  }

  return <BetContainer auction={auction} />;
}
