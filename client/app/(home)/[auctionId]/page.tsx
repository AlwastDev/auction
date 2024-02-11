import { notFound } from 'next/navigation';

import { getAuction } from '@/lib/services/auction-service';
import { Gallery } from './_components/gallery/gallery';
import { InfoCard } from './_components/info-card/info-card';
import { BetHistory } from './_components/bet-history/bet-history';
import { Actions } from './_components/actions/actions';

import * as S from './auction.styled';

interface PageProps {
  params: {
    auctionId: string;
  };
}

export default async function AuctionPage({ params }: PageProps) {
  const auction = await getAuction(params.auctionId);

  if (!auction) {
    notFound();
  }

  return (
    <S.Container>
      <Actions auctionId={auction.id} userIsOwner={auction.userIsOwner} />
      <Gallery images={auction.images} />
      <InfoCard description={auction.description} rate={auction.lastRate.rate} createdAt={auction.createdAt} />
      <BetHistory />
    </S.Container>
  );
}
