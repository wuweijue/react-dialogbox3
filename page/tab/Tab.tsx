import * as React from 'react';
import * as classNames from 'classnames';
import './Tab.less';

interface Item {
    title: JSX.Element | string;
    component: JSX.Element | string;
    key: string;
    closable?: boolean
}

interface ITabViewProps {
    tabList: Item[];
    className?: string;
    activeKey: string;
    onClose?: (key) => void;
    onChange?: (key) => void;
}

class Tab extends React.Component<ITabViewProps, any> {

    state = {
        width: 0,
    }

    tabRef;
    onLoad = false;

    componentDidMount() {
        this.setState({
            width: this.tabRef?.clientWidth
        })
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount(): void {
        window.removeEventListener('resize', this.handleResize)
    }

    handleResize = () => {
        const { tabRef } = this;
        const width = tabRef.clientWidth;
        this.setState({
            width
        })
    }

    getTranslateDistance(tabList, activeKey, width) {
        let activeKeyIndex;

        for (let i = 0; i < tabList.length; i++) {
            if (tabList[i].key === activeKey) {
                activeKeyIndex = i;
                break
            }
        }

        return - activeKeyIndex * width
    }

    render() {
        const { tabList, className, activeKey, onClose, onChange } = this.props;
        const { width } = this.state;

        return <div ref={(ref) => this.tabRef = ref} className={classNames('tab ', className)}>
            <div className='tab-bar-wrapper'>
                <div className='tab-bar-list'>
                   
                    {/* <div className="before tab-bar-item"></div> */}
                    {
                        tabList.map((item, idx) => {
                            return <button onClick={() => {
                                onChange && onChange(item.key)
                            }} className={classNames('tab-bar-item', {'tab-bar-logo': item.key === '-1' }, { 'active': activeKey === item.key })} key={item.key || idx}>
                                {/* <div className="container">
                                    
                                </div> */}
                                <div className={classNames('tab-bar-item-active-tip', { 'active': activeKey === item.key })}></div>
                                <div className='tab-bar-item-title' >
                                    {item.title}
                                </div>
                            </button>
                        })
                    }
                    <div className="after tab-bar-item"></div>
                </div>
            </div>
            <div className='tab-component-wrapper'>
                <div className='tab-component-list' style={{ marginLeft: `${this.getTranslateDistance(tabList, activeKey, width)}px` }}>
                    {
                        tabList.map((item, idx) => {
                            return <div className='tab-component-item' style={{ width: width ? width : '100%', }} key={item.key || idx}>
                                {item.component}
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    }
}

export default Tab;