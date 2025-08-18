export const metadata = {
  title: 'Shipping &amp; Returns - Janata Karadant E-Store',
  description: 'Information about our shipping and return policies.',
};

export default function ShippingReturnsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-24">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Shipping &amp; Returns</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Everything you need to know about our policies.
        </p>
      </header>
      <main className="prose lg:prose-xl max-w-none font-body">
        <h2 className="font-headline">Shipping Policy</h2>
        <p>
          We are committed to delivering your order in the best condition and on time. We ship to most locations across India.
        </p>
        <ul>
          <li><strong>Processing Time:</strong> Orders are typically processed within 1-2 business days.</li>
          <li><strong>Shipping Time:</strong> Delivery usually takes 3-7 business days depending on your location. Metro cities may see faster delivery times.</li>
          <li><strong>Shipping Charges:</strong> Shipping charges are calculated at checkout based on the weight of the order and the delivery address.</li>
          <li><strong>Tracking:</strong> Once your order is shipped, you will receive an email with the tracking details.</li>
        </ul>

        <h2 className="font-headline">Return &amp; Refund Policy</h2>
        <p>
          Due to the perishable nature of our products, we do not accept returns. However, your satisfaction is our priority.
        </p>
        <ul>
          <li><strong>Damaged Products:</strong> If you receive a product that is damaged, please contact our customer service within 24 hours of delivery with a photo of the damaged product. We will be happy to send a replacement or issue a refund.</li>
          <li><strong>Incorrect Products:</strong> If you receive an incorrect item in your order, please contact us within 24 hours. We will arrange for the correct item to be sent to you at no extra cost.</li>
          <li><strong>Cancellations:</strong> Orders can be cancelled within 2 hours of placement. After this period, cancellations may not be possible as the order may have already been processed.</li>
        </ul>
        <p>
          For any issues, please contact our customer support team at <a href="mailto:support@janatakaradant.com">support@janatakaradant.com</a> with your order number.
        </p>
      </main>
    </div>
  );
}
