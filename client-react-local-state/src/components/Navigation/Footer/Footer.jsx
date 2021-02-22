import React from 'react';
import './Footer.less';
import settings from '../../../settings/settings';
import translate from '../../../translate/translate';
import { getCreationYear } from '../../../utils/textUtils';
import { NavigationItem } from '../';

const Footer = () => {
    return (
        <div className="footer-area">
            <div className="footer-copy">
                <div className="container">
                    <div className="row">
                        <div className="pull-left">
                            <span> {translate.footer_rights_symbol} <a href={`mailto:${settings.email}`} alt={settings.creator} title={settings.creator}>{settings.creator}</a>,&nbsp;
                            {translate.footer_rights} {getCreationYear()} | {translate.footer_icons}&nbsp;
                            <a href={settings.icons_url} target="_blank" rel="noopener noreferrer" alt={settings.icons_name} title={settings.icons_name}>{settings.icons_name}</a></span>
                        </div>
                        <div className="bottom-menu">
                            <ul>
                                <NavigationItem link="/" linkText={translate.footer_home_label} exact />
                                <NavigationItem link="/auth" linkText={translate.footer_authentication_label} exact />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;