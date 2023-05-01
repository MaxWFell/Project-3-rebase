import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Team from '@/components/Team'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
    const router = useRouter();

    const members = [
        {
            name: 'Max Fell',
            role: 'Backend',
        },
        {
            name: 'Rose Black',
            role: 'Backend',
        },
        {
            name: 'Frankie Sanchez',
            role: 'Frontend',
        },
        {
            name: 'Badawi Shahata',
            role: 'Frontend',
        }
    ]

    return (
        <>
            <Head>
                <title>Top Foodies - Home</title>
                <meta name="description" content="Get personalized suggestions that your pets will love" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div style={{
                backgroundColor: "#adc178",
            }}>
                <div className='container'>
                    <div className='py-5 text-center text-light'>
                        <p className='display-4 font-weight-bold ' >Giving you new experiences, one plate at a time!</p>
                        <p className='lead'>
                            Whether it's a diet, cheat night or a date night we got something for everyone.
                        </p>
                        <button className='btn btn-secondary btn-lg' onClick={() => router.push('/products')}>Shop Now</button>
                    </div>
                </div>
            </div>
            <div>
                <div className='container py-5'>
                    <div className='row align-items-center'>
                        <div className='col-md-6'>
                            <img src='/images/food_packaged.jpg' className='img-fluid' />
                        </div>
                        <div className='col-md-6'>
                            <h4 className='font-weight-bold'>Everything comes fresh and packaged with care</h4>
                            <p className='lead'>With guaranteed next day shipping you can save yourself a grocery trip</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                backgroundColor: "#adc178",
            }} className='py-5'>
            </div>
            <div style={{
                // linear gradient from #adc178 to #adc179
                backgroundImage: "linear-gradient(90deg, #adc178 0%, #adc179 100%)",
            }}>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-6'>
                            <img src='/images/sheet_pan_shrimp_fajitas.png' width="500px" vspace="31px" className='img-fluid rounded-sm mt-n3' />
                        </div>
                        <div className='col-md-6 text-light'>
                            <h4 className='font-weight-bold'>Sign up for Additional Savings!</h4>
                            <p className='lead'>Create a profile that meet your needs:</p>
                            <ul>
                                <li>Save your orders for next time</li>
                                <li>Offer suggestions on what you might like</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                backgroundImage: "linear-gradient(90deg, #adc178 0%, #adc179 100%)",
            }} className='py-5'>
            </div>
            <div>
                <div className='container py-4'>
                    <Team members={members} />
                </div>
            </div>
            <div className='py-5'></div>
            <div className='py-5'></div>
        </>
    )
}
