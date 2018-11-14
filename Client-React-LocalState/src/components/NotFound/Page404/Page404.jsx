import React from 'react';
import './Page404.less';
import translate from '../../../translate/translate';
import { SubmitButton } from '../../UI';

const Page404 = () => {
    return (
        <div className="error-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 col-sm-12 text-center">
                        <h2 className="error-title">{translate.page_not_found_sub_title}</h2>
                        <p>{translate.page_not_found_text}</p>
                        <SubmitButton buttonType="button"
                            isDifferentColor={false}
                            title={translate.page_not_found_home_button} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page404;