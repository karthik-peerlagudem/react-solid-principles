// we have to update the interface to have only image and title in order to work with
// Interface Segregation Principle

interface IThumbnailProps {
    image: string;
    title: string;
}

export const Thumbnail = ({ image, title }: IThumbnailProps) => {
    return <img src={image} alt={title} width={120} height={120} />;
};
