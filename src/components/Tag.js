import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';

import tags from '../tags';

const dsConfig = {
    text: 'tag',
    value: 'tagId'
}

class Tag extends Component {
    handleInput = (chosenRequest) => {
        this.props.handler(chosenRequest);
    }
    render() {
        return (
            <AutoComplete
                hintText="Tag"
                dataSource={tags}
                dataSourceConfig={dsConfig}
                onNewRequest={this.handleInput}
                filter={AutoComplete.caseInsensitiveFilter}
            />
        );
    }
}

export default Tag;
