
import { render, screen } from "@testing-library/react";
import Table from "./Table";

describe('Table', () => {
    it('should render', () => {
        const { container } = render(<Table columns={[]} dataSource={[]} />);
        expect(container).toMatchSnapshot();
    });
    
    it('should render columns', () => {
        const columns = [
            {
                name: 'name',
                label: 'Name'
            },
            {
                name: 'priority',
                label: 'Priority'
            }
        ];
        const { container } = render(<Table columns={columns} dataSource={[]} />);
        expect(container).toMatchSnapshot();
    } );

    it('should render data', () => {
        const columns = [
            {
                name: 'name',
                label: 'Name'
            },
            {
                name: 'priority',
                label: 'Priority'
            }
        ];
        const dataSource = [
            {
                key: 1,
                name: 'name1',
                priority: 'priority1'
            },
            {
                key: 2,
                name: 'name2',
                priority: 'priority2'
            }
        ];
        const { container } = render(<Table columns={columns} dataSource={dataSource} />);
        expect(container).toMatchSnapshot();
    });

    it('should render data with render function', () => {
        const columns = [
            {
                name: 'name',
                label: 'Name'
            },
            {
                name: 'priority',
                label: 'Priority',
                render: (record: any) => <div>{record.priority}</div>
            }
        ];
        const dataSource = [
            {
                key: 2,
                name: 'name1',
                priority: 'priority1'
            },
            {
                key: 1,
                name: 'name2',
                priority: 'priority2'
            }
        ];
        const { container } = render(<Table columns={columns} dataSource={dataSource} />);
        expect(container).toMatchSnapshot();
    });

    it('should render data with render function and click', () => {
        const columns = [
            {
                name: 'name',
                label: 'Name'
            },
            {
                name: 'priority',
                label: 'Priority',
                render: (record: any) => <div>{record.priority}</div>
            }
        ];
        const dataSource = [
            {
                key : 1,
                name: 'name1',
                priority: 'priority1'
            },
            {
                key: 2,
                name: 'name2',
                priority: 'priority2'
            }
        ];
        const { container } = render(<Table columns={columns} dataSource={dataSource} />);
        expect(container).toMatchSnapshot();
        const div = screen.getByText('priority1');
        expect(div).toBeInTheDocument();
        expect(div).toHaveTextContent('priority1');
    });
    
});