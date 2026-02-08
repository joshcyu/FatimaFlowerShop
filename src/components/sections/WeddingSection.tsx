import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Heart, Send, MessageCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export function WeddingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    details: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: 'Quote Request Received!',
      description: 'We will get back to you soon.',
    });
  };

  const handleMessenger = () => {
    const message = encodeURIComponent(
      `Hi! I'd like to request a quote for:\n\nName: ${formData.name}\nEvent: ${formData.eventType}\nDate: ${formData.eventDate}\n\nDetails: ${formData.details}`
    );
    window.open(`https://m.me/61583058193682?text=${message}`, '_blank');
  };

  return (
    <section id="wedding" className="py-24 bg-cream relative overflow-hidden">
      {/* Flower anchor */}
      <div data-flower-anchor data-anchor-id="wedding" data-side="left" className="absolute top-1/4 left-0" />

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Header Banner */}
          <motion.div
            className="relative bg-background rounded-3xl p-12 mb-16 overflow-hidden shadow-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
            <div className="relative z-10 text-center">
              <Heart className="w-12 h-12 mx-auto text-primary mb-4" />
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
                Wedding Arrangements <br />
                <span className="text-gradient-gold">& Bulk Orders</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Let us make your special day even more beautiful. From intimate ceremonies to grand celebrations, we create stunning floral arrangements tailored to your vision.
              </p>
            </div>
          </motion.div>

          {/* Quote Form */}
          <div className="max-w-2xl mx-auto">
            <motion.div
              className="bg-background rounded-2xl p-8 shadow-soft"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              {!isSubmitted ? (
                <>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 text-center">
                    Request a Quote
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          placeholder="Full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          placeholder="+63 XXX XXX XXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="eventType">Event Type</Label>
                        <Input
                          id="eventType"
                          placeholder="Wedding, Corporate, etc."
                          value={formData.eventType}
                          onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eventDate">Event Date</Label>
                      <Input
                        id="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="details">Tell Us More</Label>
                      <Textarea
                        id="details"
                        placeholder="Describe your vision, preferred flowers, colors, and any special requirements..."
                        rows={4}
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Submit Quote Request
                    </Button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                      <Heart className="w-10 h-10 text-primary" />
                    </div>
                  </motion.div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Your quote request has been received. We'll get back to you soon!
                  </p>
                  <Button
                    onClick={handleMessenger}
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Send via Messenger
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
