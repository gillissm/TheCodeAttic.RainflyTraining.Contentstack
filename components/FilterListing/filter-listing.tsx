import { ListingDisplayProps } from '@/types/component-models';
import BlogListing from './blog-listing';
import EventListing from './event-listing';
import NewsListing from './news-listing';


export default function FilterListing({ listing }: { listing: ListingDisplayProps }) {
    // console.log('listing comp')
    // console.log(listing)
    if (listing.target_content_type === "Event") {
        return <EventListing sectionHeader={listing.headline} />
    }
    if (listing.target_content_type === "News") {
        return <NewsListing sectionHeader={listing.headline} />
    }

    if (listing.target_content_type === "Blog") {
        return <BlogListing sectionHeader={listing.headline} />
    }
    return <>This is empty</>;
}