import classNames from "classnames";
import Link from "next/link";
import React from "react";

export interface HeaderProps {
    menus: {label: string, value: string}[];
    active: string;
}

const Header = ({menus, active}: HeaderProps) => {
    return (
        <div className="bg-blue-400 py-4 px-10 text-white flex justify-between hidden">
        <h1 className="font-bold text-lg">网站</h1>
        <ul className="flex items-center gap-8">
          {menus.map(item => (
            <li key={item.value} className={classNames({
              'text-orange-600 font-bold': item.value === active
            })}>
              <Link href={item.value}>{item.label}</Link>
          </li>
          ))}
        </ul>
      </div>
    )
};

export default Header;