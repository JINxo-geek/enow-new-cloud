import React, { Component } from "react";
import { Input } from "antd";
const { Search } = Input;

export interface SearchBarProps {
  searchFile?: any;
}
export interface SearchBarState {}

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  static defaultProps = {};
  formLayout = {};
  constructor(props: SearchBarProps) {
    super(props);
  }

  render() {
    const searchFile = this.props.searchFile;
    return (
      <Search
        placeholder="搜索文档"
        onSearch={value => searchFile(value)}
        className="search"
      />
    );
  }
}

export default SearchBar;
