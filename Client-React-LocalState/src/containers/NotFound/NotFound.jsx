import React, { Component } from 'react';
import translate from '../../translate/translate';
import { Auxiliary } from '../../hoc';
import { PageTitle } from '../../components/UI';
import { Page404 } from '../../components/NotFound';

class NotFound extends Component {
    render() {
        return (
            <Auxiliary>
                <PageTitle title={translate.page_not_found_main_title} />
                <Page404 />
            </Auxiliary>
        );
    }
}

export default NotFound;