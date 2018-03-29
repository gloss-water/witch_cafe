import React from 'react';
import logo from '../../images/WitchCafeLBlack2.png';
import './index.css';

const Body = () => (
    <div className='app-body'>
        <div className='body-left'>
            <div className='logo-wrapper'>
                <img src={logo} className='witch-cafe-logo' alt=''/>
            </div>
            <div className='content-wrapper'>
                <div className='body-left-item'>
                    <a href='mailto:info@witch.cafe?Subject=Website' target='_top'>&#x69;&#x6E;&#x66;&#x6F;&#x40;&#x77;&#x69;&#x74;&#x63;&#x68;&#x2E;&#x63;&#x61;&#x66;&#x65;</a>
                </div>
                <div className='body-left-item'>
                    est. 2017
                </div>
                <div className='body-left-item'>
                    <a href='https://patreon.com/lipgloss' rel="noopener noreferrer" target='_blank'>support us</a>
                </div>
            </div>
        </div>
        <div className='body-right'>
            <div className='box'>
                <div className='body-title-head'>For Our Guests And Customers:</div>
                Witch Cafe is a <a rel="noopener noreferrer" href='https://en.wikipedia.org/wiki/Netlabel' target='_blank'>netlabel*</a> serving underground, independent electronic and hip-hop musicians and their fans by distributing art through streaming companies.  Witch Cafe seeks to grow audiences for artists by collaborating with playlist curators, negotiating licensing fees and more.
                <br /><br />
                Our goal is to spread art that we love.
            </div>
            <div className='box'>
                <div className='body-title-head'>House Blends <small className='is-pulled-right'><em>our artists</em></small></div>
                <div className='artists'>
                    <div className='artist'>
                        <a title='nyanners' target='_blank' rel='noopener noreferrer' href='https://twitter.com/taylornyanners'>
                            <img alt='twitter' src='https://pbs.twimg.com/profile_images/974347252721442817/tYRB_g37_400x400.jpg' />
                        </a>
                    </div>
                    <div className='artist'>
                        <a title='magic circuit' target='_blank' rel='noopener noreferrer' href='https://twitter.com/magic_circuit'>
                            <img alt='twitter' src='https://pbs.twimg.com/profile_images/934685356556980225/yv2UbwkA_400x400.jpg' />
                        </a>
                    </div>
                    <div className='artist'>
                        <a title='lipgloss' target='_blank' rel='noopener noreferrer' href='https://twitter.com/glosstradamus'>
                            <img alt='twitter' src='https://pbs.twimg.com/profile_images/904034322272935940/zFWBLnID_400x400.jpg' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='box'>
                <div className='body-title-head'>Menu <small className='is-pulled-right'><em>our releases</em></small></div>
                <div className='releases'>
                    <div className='release'>
                        <a title='Gucci Gang' target='_blank' rel='noopener noreferrer' href='http://gucci.witch.cafe'>
                            <img alt='smart url' src='http://is4.mzstatic.com/image/thumb/Music128/v4/52/c0/04/52c0040f-bdd2-b39a-3d6e-4b3cd7d57053/source/450x450bb.jpg' />
                        </a>
                    </div>
                    <div className='release'>
                        <a title='Bad Vibez (single)' target='_blank' rel='noopener noreferrer' href='https://open.spotify.com/track/3rd4qsXdIQVeX4FgpkFj8b?si=8JKZKUNWTO6ZQgVne1mNBQ'>
                            <img alt='bad vibez' src='https://i.scdn.co/image/84fc354cd425731bc77aa34f475eeae62ba7cdc5' />
                        </a>
                    </div>
                    <div className='release'>
                        <a title='Black Friday Mixtape' target='_blank' rel='noopener noreferrer' href='https://twitter.com/glosstradamus/status/937018008588787713'>
                            <img alt='bad vibez' src='https://i.scdn.co/image/bca5ef1204434babf5eca624460c3fe93381c09e' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Body;
