import './layout.less';
import React, { useState, useTransition } from 'react';
import { inject, observer } from 'mobx-react';
import classNames from 'classNames';
import { useTranslation } from 'react-i18next';

interface Iprops {
    asideList
    asideTop?
    className?
    store?
    children?
}

const Layout = inject('store')(observer((props: Iprops) => {
    const { asideList, asideTop, className } = props;

    const handleClick = (id) => {
        const dom = document.getElementById(id);
        if (dom) {
            document.querySelector('.layout .right')?.scrollTo({
                top: dom.offsetTop - 80
            })
        }
    }

    const [activeAnchor, setActiveAnchor] = useState('');
    const [status, starTransition] = useTransition();
    const { t } = useTranslation();

    const handleScroll = () => {
        const scrollPosition = document.querySelector('.layout .right')?.scrollTop || 0;
        const sections = document.querySelectorAll('.layout .right .item-content');
        const sectionDistances = Array.from(sections).map(section => {
            return (section as any).offsetTop;
        });
        let activeSectionIndex = 0;
        for (let i = 0; i < sectionDistances.length; i++) {
            if (sectionDistances[i] < scrollPosition + sectionDistances[0] + 24) {
                activeSectionIndex = i;
            }
        }
        activeSectionIndex = activeSectionIndex === -1 ? 0 : activeSectionIndex;
        starTransition(() => setActiveAnchor(sections[activeSectionIndex].id))
    };

    React.useEffect(() => {
        setActiveAnchor(asideList[0].value)
    }, [])

    return <div className='layout'>
        <div className="left">
            {asideTop}
            <div className="aside-list">
                {
                    asideList.map((item, idx) => {
                        return <div key={item.value} className={classNames('aside-list-item', {
                            active: activeAnchor === item.value
                        })} onClick={() => handleClick(item.value)}>
                            <a>{t(item.title)}</a>
                        </div>
                    })
                }
            </div>

        </div>
        <div className={classNames(className, 'right')} onScroll={handleScroll} >
            {props.children}
        </div>
    </div>
}))

export default Layout