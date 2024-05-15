import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Container, Button, Box, Typography, Paper } from '@mui/material';
import AppAppBarLearner from '../common/AppAppBarLearner';
import { useLocation } from 'react-router-dom';

const stripePromise = loadStripe('your_stripe_publishable_key');

const StripeCheckout = () => {
    const location = useLocation();
    const price = location.state.price;
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        const result = await stripe.createToken(card);

        if (result.error) {
            console.log(result.error.message);
        } else {
            console.log(result.token);
        }
    };

    return (
        <div className="flex">
            <AppAppBarLearner />
            <div className="flex-1 mx-3">
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        pt: { xs: 14, sm: 20 },
                        pb: { xs: 8, sm: 12 },
                    }}
                >
                    <Typography variant="h4" component="h1" gutterBottom>
                        Payment
                    </Typography>
                    <Typography variant="h6" component="h2" gutterBottom>
                        Course Price: ${price}
                    </Typography>
                    <Paper elevation={3} className="w-full max-w-sm mt-5 p-5 rounded border border-black">
                        <form onSubmit={handleSubmit}>
                            <Box sx={{ height: 300, display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                                <CardElement options={{ style: { base: { fontSize: '18px', color: '#424770', '::placeholder': { color: '#aab7c4' } } } }} />
                                <Button type="submit" variant="contained" color="primary" disabled={!stripe} className="mt-3">
                                    Pay ${price}
                                </Button>
                            </Box>
                        </form>
                    </Paper>
                </Container>
            </div>
        </div>
    );
};

const StripeCheckoutWrapper = ({ price }) => (
    <Elements stripe={stripePromise}>
        <StripeCheckout price={price} />
    </Elements>
);

export default StripeCheckoutWrapper;